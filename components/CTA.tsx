import Image from "next/image";
import Link from "next/link";
const CTA = () => {
    return (
        <section className="cta-section">
            <div className="cta-badge">start learning your way</div>
            <h2 className="text-3xl font-bold">builld and persnalise learning journey</h2>
            <p >pick your topics, set your pace and let AI be your personal tutor</p>
            <Image src="/images/cta.svg" alt="cta" width={362} height={232} />
            <button className="btn-primary">
                <Image src="/icons/plus.svg" alt="plus" width={12} height={12} />
                <Link href="/companions/new" >
                    build your first companion
                </Link>
            </button>
        </section>
    )
}

export default CTA