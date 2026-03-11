
import Image from 'next/image'
import Link from 'next/link'
interface CompanionCardProps {
    id: string;
    name: string;
    topic: string;
    subject: string;
    duration: string;
    color: string;
}
const companionCard = ({ id, name, topic, subject, duration, color }: CompanionCardProps) => {
    return (
        <article className="companion-card" style={{ backgroundColor: color }}>
            <div className="flex  justify-between items-center">
                <span className="subject-badge">{subject}</span>
                <button className="companion-bookmark">
                    <Image src="/icons/bookmark.svg" alt="Bookmark" width={12} height={15} />
                </button>
            </div>

            <h1 className='text-2xl font-bold'>{name}</h1>
            <p className='text-sm text-gray-500'>{topic}</p>
            <div className='flex items-center gap-2'>
                <Image src="/icons/clock.svg" alt="duration" width={12} height={12} />
                <p className='text-sm'>{duration} mins duration</p>
                <Link href={`/companion/${id}`} className='w-full'>
                    <button className='btn-primary w-full justify-center'>lunch lesson</button>
                </Link>
            </div>

        </article>
    )
}

export default companionCard