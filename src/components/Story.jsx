import React from 'react'; // Assuming React usage

const Link = ({ url, title }) => (
  <a href={url} target='_blank' rel='noopener noreferrer'>
    {title}
  </a>
);

const Story = ({ story }) => {
  const { id, by, title, kids, time, storyUrl } = story; // Assuming correct property name

  return (
    <div className='story'>
      <div className='story-title'>
        <Link url={storyUrl} title={title} />
      </div>
      <div className='story-info'>
        <span>
          by{' '}
          <Link url={`https://news.ycombinator.com/user?id=${by}`} title={by} />
        </span>
        |
        <span>
          {new Date(time * 1000).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
          })}
        </span>
        |
        <span>
          <Link
            url={`https://news.ycombinator.com/item?id=${id}`}
            title={`${kids?.length ? kids.length : 0} comments`}
          />
        </span>
      </div>
    </div>
  );
};

export default Story;
