
import { Avatar } from 'primereact/avatar';
import { InputText } from 'primereact/inputtext';

export default function TopBar() {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white shadow-sm">
      <div className="text-xl font-bold">Perplexity UI</div>
      <div className="flex items-center space-x-4">
        <InputText placeholder="Search..." className="w-64" />
        <Avatar label="U" shape="circle" />
      </div>
    </div>
  );
}
