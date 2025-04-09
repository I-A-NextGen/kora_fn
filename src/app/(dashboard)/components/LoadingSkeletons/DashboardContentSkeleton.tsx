import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DashboardContentSkeleton = () => {
  return (
    <div className="flex min-h-[calc(100vh-10rem)] flex-col gap-10 ">
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
          height={180}
          style={{
            borderRadius: "12px",
          }}
          inline
        />
        <Skeleton
          baseColor="#d1d7ed"
          highlightColor="#f1f5f9"
          width="31%"
          height={180}
          style={{
            borderRadius: "12px",
          }}
          className="ml-9"
          inline
        />
        <Skeleton
          baseColor="#d1d7ed"
          highlightColor="#f1f5f9"
          width="31%"
          height={180}
          style={{
            borderRadius: "12px",
          }}
          className="ml-9"
          inline
        />
      </div>
      <div className="h-[calc(100vh-31.5rem)] rounded-md overflow-hidden">
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
