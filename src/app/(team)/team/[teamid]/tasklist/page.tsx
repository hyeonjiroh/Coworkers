import ModalButton from '@/app/(team)/team/[teamid]/tasklist/_components/ModalButton';
import CreateTeamButton from './_components/CreateTeamButton';
import DeleteTeamButton from './_components/DeleteTeamButton';
import LoginButton from './_components/LoginButton';
import LogoutButton from './_components/LogoutButton';
// import TeamInfo from './_components/TeamInfo';

export default function TaskListPage() {
  return (
    <div>
      <h1>Task List Page</h1>
      <LoginButton />
      <br />
      <LogoutButton />
      <br />
      <CreateTeamButton />
      <br />
      <DeleteTeamButton />
      {/* <TeamInfo /> */}
      <br />
      <ModalButton />
    </div>
  );
}
