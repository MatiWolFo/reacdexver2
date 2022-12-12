import { DotSpinner } from '@uiball/loaders';

export const Loader = () => {
	return (
        <div className="container-loader">
            <DotSpinner size={100} speed={1} color='black' />
        </div>
    )
};
