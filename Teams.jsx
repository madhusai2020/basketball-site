const teams = [
    {
      name: "Golden State Warriors",
      location: "San Francisco, CA",
      logo: "https://loodibee.com/wp-content/uploads/nba-golden-state-warriors-logo.png"
    },
    {
      name: "Los Angeles Lakers",
      location: "Los Angeles, CA",
      logo: "https://loodibee.com/wp-content/uploads/nba-los-angeles-lakers-logo.png"
    },
    {
      name: "Milwaukee Bucks",
      location: "Milwaukee, WI",
      logo: "https://loodibee.com/wp-content/uploads/nba-milwaukee-bucks-logo.png"
    }
  ];
  
  export default function Teams() {
    return (
      <section id="teams" className="py-20 bg-gradient-to-tr from-green-300 via-emerald-400 to-teal-400 text-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10">NBA Teams</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {teams.map((team, idx) => (
              <div key={idx} className="bg-white text-gray-800 p-6 rounded-xl shadow-lg">
                <img src={team.logo} alt={team.name} className="h-24 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{team.name}</h3>
                <p className="text-sm">{team.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  