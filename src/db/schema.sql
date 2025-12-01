-- Waitlist table for storing user signups
CREATE TABLE IF NOT EXISTS waitlist (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  waitlist_position INTEGER,
  signup_date TIMESTAMP DEFAULT NOW(),
  confirmation_sent BOOLEAN DEFAULT FALSE,
  beta_invite_sent BOOLEAN DEFAULT FALSE,
  unsubscribed BOOLEAN DEFAULT FALSE
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- Create index on signup_date for sorting
CREATE INDEX IF NOT EXISTS idx_waitlist_signup_date ON waitlist(signup_date);
