import Image from 'next/image';

const Loader = () => {
  return (
    <div className="flex-center h-screen w-full">
      <Image
        src="/icons/loading-circle.svg"
        alt="Loading..."
<<<<<<< HEAD
        width={50}
=======
        width={100}
>>>>>>> d893d9c6da674d46a34c23440d8d0c5fa122122b
        height={50}
      />
    </div>
  );
};

export default Loader;
