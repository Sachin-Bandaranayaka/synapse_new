import { SkeletonCard } from '@/components/common/Skeleton';

export default function BlogLoading() {
    return (
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                    <SkeletonCard key={i} />
                ))}
            </div>
        </div>
    );
} 