import CompanionCard from "@/components/companionCard";
import CompationList from "@/components/compationlist";
import CTA from "@/components/CTA";
const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline font-bold mb-6">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="1"
          name="John Doe"
          topic="Math"
          subject="Algebra"
          duration="1 hour"
          color="red"
        />
        <CompanionCard
          id="2"
          name="Jane Doe"
          topic="Science"
          subject="Physics"
          duration="2 hours"
          color="blue"
        />
        <CompanionCard
          id="3"
          name="Bob Smith"
          topic="History"
          subject="World History"
          duration="3 hours"
          color="green"
        />
      </section>

      <section className="home-section">
        <CompationList
          title="Recently completed sessions"
          companions={recentSessionsCompanions}
          classNames="w-2/3 max-lg:w-full" />
        <CTA />
      </section>
    </main>
  )
}

export default Page