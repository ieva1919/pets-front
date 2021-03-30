import React from 'react';

import { ApolloError } from '@apollo/client/errors';
import Skeleton from '@material-ui/lab/Skeleton';
import { Animal } from '../../graphql/types';
import AnimalsList from './AnimalsList';
import AnimalsTable from './AnimalsTable';
import { AnimalsViewType } from './ViewSelector';

interface AnimalsListContainerProps {
    viewType: AnimalsViewType;
    loading: boolean;
    error: ApolloError | undefined;
    animals: Animal[] | undefined;
}

export default function AnimalsListContainer({ loading, error, animals, viewType }: AnimalsListContainerProps) {
    if (loading) {
        return <Skeleton animation="wave" variant="rect" height={500} />;
    }

    if (error) {
        // TODO: replace with proper UI elements
        return <p>Error!</p>;
    }

    if (!animals?.length) {
        // TODO: replace with proper UI elements
        return <p>No data</p>;
    }

    if (viewType === AnimalsViewType.TABLE) {
        return <AnimalsTable animals={animals} />;
    }

    return <AnimalsList animals={animals} />;
}
