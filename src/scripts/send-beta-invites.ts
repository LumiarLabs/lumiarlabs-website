#!/usr/bin/env tsx
/**
 * Send beta invitation emails to all waitlist users
 * 
 * Usage: npx tsx src/scripts/send-beta-invites.ts
 */

import { sql } from '@vercel/postgres';
import { resend } from '@/lib/resend';
import BetaInvitationEmail from '@/emails/beta-invitation';

const ACCESS_URL = 'https://lumiarlabs.com'; // Update with your actual product URL

async function sendBetaInvites() {
    console.log('🚀 Starting beta invitation process...\n');

    try {
        // Get all users who haven't received beta invite yet
        const result = await sql`
      SELECT id, name, email
      FROM waitlist
      WHERE beta_invite_sent = FALSE
      AND unsubscribed = FALSE
      ORDER BY waitlist_position ASC
    `;

        const users = result.rows;

        if (users.length === 0) {
            console.log('✅ No pending beta invites to send!');
            return;
        }

        console.log(`📧 Found ${users.length} users to send invites to\n`);

        let successCount = 0;
        let failCount = 0;

        // Send emails one by one (you can batch this if needed)
        for (const user of users) {
            try {
                console.log(`Sending to: ${user.name} (${user.email})...`);

                await resend.emails.send({
                    from: 'LumiarLabs <onboarding@resend.dev>', // Change to your verified domain
                    to: user.email,
                    subject: 'LumiPact Beta is Live! Your Early Access Awaits 🚀',
                    react: BetaInvitationEmail({
                        name: user.name,
                        accessUrl: ACCESS_URL
                    }),
                });

                // Mark as sent in database
                await sql`
          UPDATE waitlist
          SET beta_invite_sent = TRUE
          WHERE id = ${user.id}
        `;

                successCount++;
                console.log(`✅ Sent!\n`);

                // Rate limit: wait 100ms between emails to avoid hitting limits
                await new Promise(resolve => setTimeout(resolve, 100));

            } catch (error) {
                failCount++;
                console.error(`❌ Failed to send to ${user.email}:`, error);
                console.log('');
            }
        }

        console.log('\n📊 Results:');
        console.log(`✅ Successfully sent: ${successCount}`);
        console.log(`❌ Failed: ${failCount}`);
        console.log(`📈 Total processed: ${users.length}`);

    } catch (error) {
        console.error('💥 Error:', error);
        process.exit(1);
    }
}

// Run the script
sendBetaInvites()
    .then(() => {
        console.log('\n✨ Done!');
        process.exit(0);
    })
    .catch((error) => {
        console.error('💥 Fatal error:', error);
        process.exit(1);
    });
