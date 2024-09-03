//External Import
import { lazy, Suspense } from "react";

//Internal Lib Import
import LazyLoader from "../../components/Common/LazyLoader";
const Dashboard = lazy(() => import("../../components/Dashboard/Dashboard"));
const MasterLayout = lazy(() => import("../../components/MasterLayout"));

const DashboardPage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout>
        <Dashboard />
      </MasterLayout>
    </Suspense>
  );
};

export default DashboardPage;
