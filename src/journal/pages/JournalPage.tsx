import { JournalLayout } from '../layout/JournalLayout';
import { NothingSelectedView } from '../views';

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad non culpa
        obcaecati nostrum doloremque corrupti quaerat beatae repudiandae natus
        quis, est, iure unde deleniti placeat modi. Quisquam nulla voluptate
        rem.
      </Typography> */}

      <NothingSelectedView />
      {/* NoteView */}
    </JournalLayout>
  );
}
