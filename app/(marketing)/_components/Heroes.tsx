import Image from "next/image";

export const Heroes = () => {
  return (
    <div className='flex-col items-center justify-center max-w-5xl '>
      <div className='flex items-center'>
        <div className='relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-400px] md:h-[400px]'>
          <Image
            src='/documents.png'
            fill
            className='object-contain dark:hidden'
            alt='Documents'
          />
          <Image
            src='/documents-dark.png'
            fill
            className='object-contain hidden dark:block'
            alt='Documents'
          />
        </div>
        <div className='relative hidden md:block h-[400px] w-[400px]'>
          <Image
            src='/reading.png'
            fill
            className='object-contain dark:hidden'
            alt='A user reading'
          />
          <Image
            src='/reading-dark.png'
            fill
            className='object-contain hidden dark:block'
            alt='A user reading'
          />
        </div>
      </div>
    </div>
  );
};
