// Define the Ticket interface to represent the structure of each ticket
interface Ticket {
    id: number;
    title: string;
    body: string;
    priority: string;
    user_email: string;
  }
  
  // Function to fetch tickets from the server
  async function getTickets(): Promise<Ticket[]> {
    const res = await fetch('http://localhost:4000/tickets', {
      next: {
        revalidate: 20, // Use 0 to opt out of using cache
      },
    });
  
    // Ensure the response is JSON and matches the Ticket interface
    return res.json();
  }
  
  // Component to render the list of tickets
  export default async function TicketList() {
    const tickets = await getTickets();
  
    return (
      <>
        {tickets.map((ticket) => (
          <div key={ticket.id} className="bg-white p-6 rounded-lg shadow-lg my-5">
            <h3 className="text-xl font-bold mb-2 text-blue-600">{ticket.title}</h3>
            <p className="text-gray-700 mb-4">
              {ticket.body.slice(0, 200)}...
            </p>
            <div
              className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                ticket.priority === 'Critical'
                  ? 'bg-red-500 text-white'
                  : ticket.priority === 'High'
                  ? 'bg-yellow-500 text-white'
                  : ticket.priority === 'Medium'
                  ? 'bg-blue-500 text-white'
                  : 'bg-green-500 text-white'
              }`}
            >
              {ticket.priority} priority
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Submitted by: {ticket.user_email}
            </p>
          </div>
        ))}
        {tickets.length === 0 && (
          <p className="text-center text-gray-600">
            There are no open tickets, yay!
          </p>
        )}
      </>
    );
  }
  