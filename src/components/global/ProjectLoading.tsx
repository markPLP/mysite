import { Card, CardContent } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

const ProjectLoading = () => {
  return (
    <div className="align-element flex flex-col m-auto pb-0 px-0 max-w-[calc(100%-50px)] md:max-w-[calc(100%-77px)] md:mr-0 md:px-8 lg:max-w-[88%] lg:gap-y-[10px] xl:mr-auto">
      <div className="mb-7 p-0 relative rounded-lg ">
        <LoadingProjects />
      </div>
      <div className="lg:grid lg:grid-cols-2 gap-8">
        <LoadingProjects />
        <LoadingProjects />
      </div>
    </div>
  );
};

export default ProjectLoading;

function LoadingProjects() {
  return (
    <Card>
      <CardContent className="p-4">
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-4 w-3/4 mt-4" />
        <Skeleton className="h-4 w-1/4 mt-4" />
      </CardContent>
    </Card>
  );
}
