import NewUser from './pageComponents/NewUser';
import PhoneList from './pageComponents/PhoneList';

function App() {
  return (
    <div className="text-center pt-10 w-3/5 mx-auto">
      <h1 className="text-4xl font-bold">Fancy Phone Book</h1>
      <div className="flex mt-10">
        <div className="flex-auto w-1/3 rounded p-5 shadow-lg">
          <NewUser />
        </div>

        <div className="flex-auto w-2/3">
          <PhoneList />
        </div>

      </div>
    </div>
  );
}

export default App;
