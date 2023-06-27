import IntroductionItem from './introduction-item';

const dummy_list = [
  { id: 'i1', text: 'someText' },
  { id: 'i2', text: 'someText' },
  { id: 'i3', text: 'someText' },
];

const IntroductionList = props => {
  return (
    <section className="dark:bg-slate-600 p-2 py-6">
      <header className="md:text-3xl font-bold my-4 p-3">
        <h2>Exploring the Power of Online Chat</h2>
      </header>
      <div className="dark:text-black grid gap-8 grid-cols-[repeat(auto-fit,minmax(15rem,_1fr))] px-6">
        <IntroductionItem
          srcImg="/imgs/landing2.jpg"
          title="Embracing the Chat Experience"
          listItems={dummy_list}
          heuA="20"
          heuB="40"
        />
        <IntroductionItem
          srcImg="/imgs/landing1.jpg"
          title="A Journey of Communication"
          listItems={dummy_list}
          heuA="60"
          heuB="90"
        />
        <IntroductionItem
          srcImg="/imgs/landing3.jpg"
          title="Embracing the Chat Experience"
          listItems={dummy_list}
          heuA="340"
          heuB="10"
        />
      </div>
    </section>
  );
};

export default IntroductionList;
