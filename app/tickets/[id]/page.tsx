// Define the Ticket interface
interface Ticket {
    id: number;
    title: string;
    body: string;
    priority: string;
    user_email: string;
  }
  
  // Function to fetch a single ticket by ID
  async function getTicket(id: number): Promise<Ticket> {
    const res = await fetch(`http://localhost:4000/tickets/${id}`, {
      next: {
        revalidate: 60,
      },
    });
  
    return res.json();
  }
  
  // Component to display the details of a ticket
  export default async function TicketDetails({
    params,
  }: {
    params: { id: string };
  }) {
    const ticket = await getTicket(Number(params.id));
  
    return (
      <main className="container mx-auto p-6">
        <nav className="mb-8 bg-indigo-600 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold">Ticket Details</h2>
        </nav>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-2 text-gray-800">{ticket.title}</h3>
          <small className="text-sm text-gray-500 block mb-4">
            Created by {ticket.user_email}
          </small>
          <p className="text-gray-700 mb-4">{ticket.body}</p>
          <div
            className={`inline-block px-4 py-1 text-sm font-semibold rounded-full ${
              ticket.priority === 'Critical'
                ? 'bg-red-500 text-white'
                : ticket.priority === 'High'
                ? 'bg-yellow-500 text-black'
                : ticket.priority === 'Medium'
                ? 'bg-blue-500 text-white'
                : 'bg-green-500 text-white'
            }`}
          >
            {ticket.priority} priority
          </div>
        </div>
      </main>
    );
  }
  