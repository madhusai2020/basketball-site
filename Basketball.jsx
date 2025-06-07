const players = [
    {
      name: "Stephen Curry",
      team: "Golden State Warriors",
      ppg: 29.4,
      apg: 6.1,
      rpg: 5.2,
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png"
    },
    {
      name: "LeBron James",
      team: "Los Angeles Lakers",
      ppg: 28.9,
      apg: 7.4,
      rpg: 8.1,
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png"
    },
    {
      name: "Giannis Antetokounmpo",
      team: "Milwaukee Bucks",
      ppg: 31.1,
      apg: 5.7,
      rpg: 11.8,
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png"
    }
  ];
  
  export default function Basketball() {
    return (
      <section id="basketball" className="py-20 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-300 text-center">
        <div className="max-w-4xl mx-auto px-4" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-white mb-6">Basketball</h2>
          <p className="text-lg text-white mb-4">
            Basketball is a high-energy sport that combines skill, teamwork, and athleticism.
          </p>
          <p className="text-white mb-10">
            From NBA games to local pickup courts, basketball inspires millions of players and fans around the world.
          </p>
          <img
              src="https://t3.ftcdn.net/jpg/12/49/43/10/360_F_1249431095_YnH64LCvkmag2xFLnlxHvjxkxwOIdmPT.jpg"
              alt="Basketball"
              className="mx-auto rounded-lg shadow-lg w-full max-w-md mb-12"
            />
  
          <h3 className="text-3xl font-semibold text-white mb-6">Top Players</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {players.map((player, idx) => (
              <div key={idx} className="relative group [perspective:1000px] cursor-pointer">
                <div className="relative h-80 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Side */}
                  <div className="absolute inset-0 bg-white rounded-xl p-6 shadow-xl text-left [backface-visibility:hidden]">
                    <img
                      src={player.img}
                      alt={player.name}
                      className="rounded w-full h-36 object-cover mb-4"
                    />
                    <h4 className="text-xl font-bold text-orange-700">{player.name}</h4>
                    <p className="text-gray-600 text-sm mb-2">{player.team}</p>
                  </div>
  
                  {/* Back Side */}
                  <div className="absolute inset-0 bg-orange-100 rounded-xl p-6 shadow-xl text-left [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <h4 className="text-xl font-bold text-orange-900 mb-2">Stats</h4>
                    <ul className="text-gray-800 text-sm">
                      <li><strong>PPG:</strong> {player.ppg}</li>
                      <li><strong>APG:</strong> {player.apg}</li>
                      <li><strong>RPG:</strong> {player.rpg}</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
