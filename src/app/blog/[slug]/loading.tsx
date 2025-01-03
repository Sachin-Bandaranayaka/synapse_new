import { SkeletonText, SkeletonImage, SkeletonAvatar } from '@/components/common/Skeleton';

export default function BlogPostLoading() {
    return (
        <article className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-prose">
                {/* Header */}
                <div className="space-y-4">
                    <SkeletonText lines={1} className="h-8 w-3/4" />
                    <div className="flex items-center space-x-4">
                        <SkeletonAvatar size="sm" />
                        <SkeletonText lines={1} className="w-32" />
                    </div>
                </div>

                {/* Featured Image */}
                <div className="my-8">
                    <SkeletonImage className="rounded-lg" />
                </div>

                {/* Content */}
                <div className="space-y-6">
                    <SkeletonText lines={3} />
                    <SkeletonText lines={4} />
                    <SkeletonText lines={2} />
                </div>
            </div>
        </article>
    );
} 