import axios from "axios"

import VideoCard from '../components/VideoCard';
import { BASE_URL } from '../utils';
import { Video } from '../types';
import NoResults from '../components/NoResults';

interface IProps {
  videos: Video[];
}

const Home = ({ videos }: IProps) => {
  return (
    <div className='flex flex-col gap-10 videos h-full'>
      {videos.length 
        ? videos?.map((video: Video) => (
          <VideoCard post={video} isShowingOnHome key={video._id} />
        )) 
        : <NoResults text={`No Videos`} />}
    </div>
  );
};

// export default function Home({ videos }) {
//   console.log(videos);
//   return (
//     <>
//        <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//      </>
//   )
// }
export const getServerSideProps = async () => {
  const {data} = await axios.get(`http://localhost:3000/api/post`)
  // console.log)
  return {
    props: {
      videos:data
    }
  }
}
export default Home
