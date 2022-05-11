import BookCard from '@/components/BookCard.vue';
import { mount } from '@vue/test-utils';

describe('BookCard', () => {
  it('renders all of the books details successfully', () => {
    const info = {
      id: 1,
      image: 'img.jpg',
      title: 'Book Title',
      author: 'Author Name',
      year: 'Year',
    };
    // Is the ID being pulled correctly?
    // Does the Image match the ID being referenced?
    // Does the Book Title match the ID being referenced?
    // Does the Author match the ID being referenced?
    // Does the Year match the ID being referenced?
    const wrapper = mount(BookCard, {
      props: {
        info,
      },
    });
    const wrapperInfo = wrapper.html();
    expect(wrapperInfo).toContain(info.id);
    expect(wrapperInfo).toContain(info.image);
    expect(wrapperInfo).toContain(info.title);
    expect(wrapperInfo).toContain(info.author);
    expect(wrapperInfo).toContain(info.year);
  });
});
