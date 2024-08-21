import Link from 'next/link';

export default function Home() {
  return (
    <main className="container">
      <h2 className="heading">Dashboard</h2>
      <p className="intro-text">
        Welcome to your dashboard! Here, you can find the latest updates and manage all your activities in one place. Stay informed with the newest company announcements and easily navigate to different sections of your account. Whether you're checking your tickets or catching up on the latest team news, we've got everything you need right here.
      </p>

      <div className="button-container">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2 className="heading">Company Updates</h2>

      <div className="card">
        <h3 className="card-title">Welcome Our New Web Developer!</h3>
        <p className="card-text">
          We're excited to introduce Jane Doe, the newest member of our web development team. Jane brings a wealth of experience in frontend development and has already started working on some exciting new projects. Please join us in welcoming her to the team!
        </p>
      </div>
      <div className="card">
        <h3 className="card-title">New Website is Now Live!</h3>
        <p className="card-text">
          Our brand new website is officially live! We’ve been hard at work designing a fresh, user-friendly experience for our visitors. The new site features a sleek design, improved navigation, and more resources to help you stay informed about our latest offerings. Be sure to check it out and let us know what you think!
        </p>
      </div>
    </main>
  );
}
