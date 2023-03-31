import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
const Blog = (props) => {
  console.log('props :>> ', props.blog);
  const {
    author_image,
    blog_cover_image,
    blog_title,
    firstName,
    lastName,
    date_time,
    sex,
  } = props.blog;

  const date = date_time;
  const currentDate = new Date();
  const timeDiff = currentDate.getTime() - date.getTime(); // Get the time difference in milliseconds
  const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days and round down
  const month = date.toLocaleString('default', { month: 'short' }); // Get the short month name (e.g. "Mar" for March)
  const day = date.getDate(); // Get the day of the month
  const dayString = dayDiff === 1 ? '1 Day ago' : `${dayDiff} Days ago`; // Format the day difference as a string
  const formattedDate = `${month} ${day} (${dayString})`;
  console.log(formattedDate); // Output: "Aug 24 (581 Days ago)" (assuming the current date is March 14, 2023)
  // reading time
  const now = new Date();
  const randomMinutes = Math.floor(Math.random() * 11) + 5; // Generate a random number between 5 and 15
  const randomDate = new Date(now.getTime() + randomMinutes * 60000); // Add the random number of minutes to the current time in milliseconds
  const randomMinutesOnly = randomDate.getMinutes(); // Get the minutes component of the random date
  console.log(randomMinutesOnly); // Output: e.g. "47" (assuming the random date has minutes component of 47)

  return (
    <div className=' mb-10'>
      <div className='card bg-base-100 shadow-xl leading-10 border'>
        <div className=' mx-8 mt-8 border-3'>
          <img
            src={blog_cover_image}
            alt='Shoes'
            className='rounded-xl w-full'
          />
        </div>
        <div className='card-body'>
          <div className='lg:flex lg:justify-between '>
            <div className='flex gap-5 items-center'>
              <div className='avatar '>
                <div className='w-16 rounded-full'>
                  <img src={author_image} />
                </div>
              </div>
              <div>
                <h4 className='text-2xl font-semibold tracking-wide'>
                  {sex === 'male'
                    ? `Mr. ${firstName} ${lastName}`
                    : `Mrs. ${firstName} ${lastName}`}
                </h4>
                <p>{formattedDate}</p>
              </div>
            </div>
            <div>
              <p className='text-lg'>
                {randomMinutesOnly} min read{' '}
                <span className=' btn btn-ghost'>
                  <FontAwesomeIcon
                    icon={faBookmark}
                    bounce
                    size='xl'
                  />
                </span>
              </p>
            </div>
          </div>
          <h1 className='text-xl md:text-2xl font-bold '>{blog_title}</h1>
          <p>
            <span>#beginners</span> <span>#programming</span>
          </p>
          <div>
            <p className='underline text-xl tracking-wide btn btn-ghost -ml-3'>
              Mark as read{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
