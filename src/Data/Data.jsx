import React from 'react';
import { faker } from '@faker-js/faker/locale/en_US';

// const Data = () => {

//     return (
//         <div>

//         </div>
//     );
// };

// export default Data;
let title = [];
const createRandomUser = () => {
  const sex = faker.name.sexType();
  const firstName = faker.name.firstName(sex);
  const lastName = faker.name.lastName();
  const blog_title = faker.lorem.sentence();
  const blog_cover_image = faker.image.sports(640, 480, true);
  const date_time = faker.date.between(
    '2023-01-01T00:00:00.000Z',
    '2023-03-01T00:00:00.000Z'
  );

  return {
    _id: faker.datatype.uuid(),
    author_image: faker.image.avatar(),
    firstName,
    lastName,
    sex,
    blog_title,
    blog_cover_image,
    date_time,
    // getBlogTitle: (t) => {
    //   title.push(t);
    //   console.log('title :>> ', title);
    //   return title;
    // },
  };
};
// let users = [];
// for (let i = 0; i < 5; i++) {
//   const user = createRandomUser();
//   users.push(user);
//   // console.log(user);
//   console.log(users);
// }
export default createRandomUser;
