import { Link, json, redirect, useFetcher } from "@remix-run/react"
import Routes from "~/Routes"
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";
import AuthSignup from "~/sections/auth/AuthSignup";
import { commitSession, getSession } from "~/services/session.server";
import { setToastMessage } from "~/components/CustomToast";



export default function Signup () {

  const fetcher = useFetcher()

    return (
        <div className='flex w-full min-h-screen items-center justify-center'>
            <div className="w-full max-w-sm flex flex-col gap-4">
            <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight text-center mb-3">
                Signup
            </h1>
            <AuthSignup fetcher={fetcher}/>

            <Link to={Routes.login} className="text-sm w-fit">Login ?</Link>
            </div>
        </div>
    )
}

export async function loader({ request }: LoaderFunctionArgs) {
  return await authenticator.isAuthenticated(request, {successRedirect: '/'});
};

export async function action({ request }: ActionFunctionArgs) {
  const user = await authenticator.authenticate("form-signup", request);
  const session = await getSession(request.headers.get("cookie"))
  if (!user.success) {
    setToastMessage(session, user.message, 'error')
    return json({}, {headers: { 'Set-Cookie': await commitSession(session) }})
  }
  setToastMessage(session, 'welcome onboard!', 'success')
  session.set(authenticator.sessionKey, user);
  return redirect('/', {headers: { 'Set-Cookie': await commitSession(session) }})
};