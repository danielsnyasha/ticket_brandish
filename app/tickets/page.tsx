import TicketList from "./TicketList";

export default function Tickets() {
  return (
    <main className="container mx-auto p-4">
      <nav className="mb-8 bg-blue-500 text-white p-6 rounded-lg shadow-lg">
        <div>
          <h2 className="text-3xl font-bold">Tickets</h2>
          <p className="text-lg">
            <small>Currently open tickets.</small>
          </p>
        </div>
      </nav>
      <TicketList />
    </main>
  );
}
