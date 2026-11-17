
const announcements = [
  {
    title: "Registration Open",
    description: "Student registration is now open for the new academic semester.",
    date: "November 16, 2026",
  },
  {
    title: "Examination Schedule",
    description: "The examination schedule will be announced soon.",
    date: "November 18, 2026",
  },
  {
    title: "University Event",
    description: "Join us for upcoming academic and cultural activities.",
    date: "November 20, 2026",
  },
];

export default function Announcements() {
  return (
    <section className="bg-green-50 px-8 py-16">
      <h2 className="text-center text-3xl font-bold text-green-900">
        Latest Announcements
      </h2>

      <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
        {announcements.map((announcement, index) => (
          <article
            key={index}
            className="rounded-xl bg-white p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-green-900">
              {announcement.title}
            </h3>

            <p className="mt-3 text-gray-600">
              {announcement.description}
            </p>

            <p className="mt-4 text-sm text-green-700">
              {announcement.date}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
