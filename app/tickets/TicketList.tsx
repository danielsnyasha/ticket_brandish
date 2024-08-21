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
        revalidate: 0, // Use 0 to opt out of using cache
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
          <div key={ticket.id} className="card my-5">
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </div>
        ))}
        {tickets.length === 0 && (
          <p className="text-center">There are no open tickets, yay!</p>
        )}
      </>
    );
  }
  