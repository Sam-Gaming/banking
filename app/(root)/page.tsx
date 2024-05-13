import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = {
    firstName: "Ssamyyy",
    lastName: "JSM",
    email: "samyyy@gmail.com",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Acces and manage your account and transactions"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1230.13}
          />
        </header>
        recent transactions
      </div>
      <RightSidebar user={loggedIn} transaction={[]} banks={[{currentBalance:123.45}, {currentBalance:678/12}]} />
    </section>
  );
};

export default Home;
