

const loading = () => {
  return (
  <div className="flex items-center justify-center h-[100vh]">
      <div className="flex flex-row gap-2">
  <div className="w-4 h-4 rounded-full bg-[#058f1a] animate-bounce [animation-delay:.7s]"></div>
  <div className="w-4 h-4 rounded-full bg-[#058f1a] animate-bounce [animation-delay:.3s]"></div>
  <div className="w-4 h-4 rounded-full bg-[#058f1a] animate-bounce [animation-delay:.7s]"></div>
</div>
    </div>
  )
}

export default loading