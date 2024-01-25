// import React from 'react';
// import Story from './Story';
// import useDataFetcher from '../hooks/dataFetcher';
// import Loader from './Loader';

// const ShowStories = ({ type }) => {
//   const { isLoading, stories = [] } = useDataFetcher(type ? type : 'top');
//   return (
//     <React.Fragment>
//       <Loader show={isLoading}>Loading ...</Loader>
//       <React.Fragment>
//         {stories.map(
//           (story) => story && <Story key={story.id} story={story} />
//         )}
//       </React.Fragment>
//     </React.Fragment>
//   );
// };

// export default ShowStories;

import React from 'react';
import Story from './Story';
import useDataFetcher from '../hooks/dataFetcher';

const ShowStories = (props) => {
  const { type } = props.match.params;
  const { isLoading, stories } = useDataFetcher(type);

  return (
    <React.Fragment>
      {isLoading ? (
        <p className='loading'>Loading...</p>
      ) : (
        <React.Fragment>
          {stories.map(({ data: story }) => (
            <Story key={story.id} story={story} />
          ))}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ShowStories;
