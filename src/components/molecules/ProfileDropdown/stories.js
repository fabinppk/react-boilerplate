import React from 'react';
import { storiesOf } from '@storybook/react';

import Container from '_storybook/container';
import ProfileDropdown from '_molecules/ProfileDropdown';
import { PROFILE_DROPDOWN_ITEMS } from '_config/settings';

storiesOf('Molecules/ProfileDropdown', module).add('default', () => (
    <Container>
        <ProfileDropdown itens={PROFILE_DROPDOWN_ITEMS} name="Adriano Silveira" />
    </Container>
));
