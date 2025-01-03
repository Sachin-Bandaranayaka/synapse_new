interface SkeletonProps {
    className?: string;
    animate?: boolean;
}

export default function Skeleton({ className = '', animate = true }: SkeletonProps) {
    return (
        <div
            className={`bg-gray-200 dark:bg-gray-700 rounded ${animate ? 'animate-pulse' : ''
                } ${className}`}
        />
    );
}

export function SkeletonText({ lines = 1, className = '' }) {
    return (
        <div className={`space-y-3 ${className}`}>
            {Array.from({ length: lines }).map((_, i) => (
                <Skeleton
                    key={i}
                    className={`h-4 ${i === lines - 1 ? 'w-4/5' : 'w-full'}`}
                />
            ))}
        </div>
    );
}

export function SkeletonImage({ className = '' }) {
    return <Skeleton className={`aspect-video w-full ${className}`} />;
}

export function SkeletonAvatar({ size = 'md' }) {
    const sizeClasses = {
        sm: 'h-8 w-8',
        md: 'h-12 w-12',
        lg: 'h-16 w-16',
    };

    return (
        <Skeleton className={`rounded-full ${sizeClasses[size as keyof typeof sizeClasses]}`} />
    );
}

export function SkeletonCard() {
    return (
        <div className="space-y-3">
            <SkeletonImage />
            <SkeletonText lines={2} />
        </div>
    );
} 