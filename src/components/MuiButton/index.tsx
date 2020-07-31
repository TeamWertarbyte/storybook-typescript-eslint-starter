import React from 'react';
import { Button, createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';
import cx from 'classnames';

const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    root: {},
  });

interface Props {
  className?: string;
}

const Index = ({ classes, className }: Props & WithStyles<typeof styles>) => {
  return (
    <div className={cx(classes.root)}>
      <Button>Test</Button>
    </div>
  );
};

export default withStyles(styles)(Index);
