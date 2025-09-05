import me2 from '../assets/mePortfolio2.png';
export default function AboutSection () {
  return (
    <section>
      <div className="flex flex-row items-center justify-between gap-6 px-24 ">
        {/* Image */}
        <div className=' mr-auto'>
          <img src={me2} className='w-[400px] h-[400px] items-start object-contain' alt="Me" />
        </div>
        {/* About Note */}
        <div className=' max-w-[600px] ml-auto'>
            <h2 className='text-6xl font-lora'>Who is Eden?</h2>
            <br />
            <p className='text-xl text-[#B3B3B3]'>A curious tech enthusiast actively working in <span className='text-[#4AFF6B]'>UI/UX</span>  design, and <span className='text-[#4AFF6B]'>front-end development</span>. I enjoy creating user-friendly digital experiences and I’m skilled at converting my designs into clean, functional code. I am proficient in using <span className='text-[#4AFF6B]'>Figma</span>, <span className='text-[#4AFF6B]'>UI/UX</span>, <span className='text-[#4AFF6B]'>React</span> and <span className='text-[#4AFF6B]'>Tailwind CSS</span>.  I’m also a 3rd year software engineering student at Addis Ababa Science and Technology University. I’m always eager to learn, build, and collaborate.</p>
        </div>
      </div>
    </section>
  );
}
