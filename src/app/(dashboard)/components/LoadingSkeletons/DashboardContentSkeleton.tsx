import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DashboardContentSkeleton = () => {
  return (
    <div className="flex min-h-[calc(100vh-10rem)] flex-col gap-10">
      <div>
        <Skeleton
          baseColor="#d1d7ed"
          highlightColor="#f1f5f9"
          width="16rem"
          height={40}
          style={{
            borderRadius: "12px",
          }}
        />
        <Skeleton
          baseColor="#d1d7ed"
          highlightColor="#f1f5f9"
          width="16rem"
          height={25}
          style={{
            borderRadius: "12px",
          }}
        />
      </div>
      <div>
        <Skeleton
          baseColor="#d1d7ed"
          highlightColor="#f1f5f9"
          width="31%"
          style={{
            borderRadius: "12px",
          }}
          className="h-32 md:h-36 lg:h-44"
          inline
        />
        <Skeleton
          baseColor="#d1d7ed"
          highlightColor="#f1f5f9"
          width="31%"
          style={{
            borderRadius: "12px",
          }}
          className="ml-[3.4%] h-32 md:h-36 lg:h-44"
          inline
        />
        <Skeleton
          baseColor="#d1d7ed"
          highlightColor="#f1f5f9"
          width="31%"
          style={{
            borderRadius: "12px",
          }}
          className="ml-[3.4%] h-32 md:h-36 lg:h-44"
          inline
        />
      </div>
      <div className="h-[calc(100vh-31.5rem)] overflow-hidden rounded-md">
        <Skeleton
          baseColor="#d1d7ed"
          highlightColor="#f1f5f9"
          width="100%"
          height="80vh"
          style={{
            borderRadius: "12px",
          }}
          inline
        />
      </div>
    </div>
  );
};

export default DashboardContentSkeleton;
