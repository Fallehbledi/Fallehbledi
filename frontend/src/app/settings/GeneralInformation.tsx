import getUser from "@/helpers/getUser"
import UpdateProfile from './updateProfileAction'

type JwtPayload = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
const GeneralInformation = async () => {

    const user = await getUser();
  return (
    <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 ">
            <h3 className="mb-4 text-xl font-semibold text-[#058f1a] ">General information</h3>
            <form action={UpdateProfile.bind(null,user.userId)}>
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-900 ">First Name</label>
                        <input type="text" name="firstName" id="first-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder={user.firstName} />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900 ">Last Name</label>
                        <input type="text" name="lastName" id="last-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder={user.lastName} />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 ">Country</label>
                        <input type="text" name="country" id="country" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder="Tunisia" />
                    </div>
                    
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 ">Address</label>
                        <input type="text" name="adress" id="address" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder="e.g. California" />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                        <input type="email" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder={user.email} />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="phone-number" className="block mb-2 text-sm font-medium text-gray-900 ">Phone Number</label>
                        <input type="number" name="phone" id="phone-number" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder={user.phone} />
                    </div>

                    <div className="col-span-6 sm:col-full">
                        <button className="text-white bg-[#058f1a]    font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="submit">Save all</button>
                    </div>
                </div>
            </form>
        </div>
  )
}

export default GeneralInformation