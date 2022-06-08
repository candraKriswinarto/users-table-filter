
const Skeleton = ({ className }) => {
  return (
    <div className="animate-pulse">
      <div className={`bg-gray-300 rounded-md w-full ${className}`}></div>
    </div>
  )
}

export default Skeleton