import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  return (
    <section className="bg-ebony text-cream py-24 px-5 md:px-10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl">
          Letters from the maison.
        </h2>
        <p className="mt-4 text-cream/70 max-w-xl mx-auto">
          Slow correspondence on new arrivals, atelier visits and the
          occasional private preview.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
          className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type your email address"
            className="flex-1 bg-transparent border border-cream/30 px-5 py-4 text-sm placeholder:text-cream/40 focus:outline-none focus:border-cream"
          />
          <button
            type="submit"
            className="bg-cream text-ebony px-8 py-4 text-xs uppercase tracking-luxe hover:bg-sand transition"
          >
            Subscribe
          </button>
        </form>
        {done && (
          <p className="mt-4 text-sand text-xs uppercase tracking-luxe">
            Thank you. A letter is on its way.
          </p>
        )}
      </div>
    </section>
  );
}
