export default function BracketBox({ name }: { name: string }) {
  return (
    <div className="bg-white rounded-md p-2 shadow text-center text-sm border border-gray-300">
      {name}
    </div>
  );
}