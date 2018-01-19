import { EsacAddDialogComponent } from './esac-add-dialog.component';

let esacAddDialogComponent,
    dialogRefMock,
    materialDataMock;

describe('MainService', () => {
    beforeEach(() => {
        dialogRefMock = {
            close: jasmine.createSpy('MatDialogRef.close')
        };

        materialDataMock = {};

        esacAddDialogComponent = new EsacAddDialogComponent(dialogRefMock, materialDataMock);
    });

    describe('onNoClick', () => {
        it('call close method from dialogRef', () => {
            esacAddDialogComponent.onNoClick();

            expect(dialogRefMock.close).toHaveBeenCalled();
        });
    });

    describe('chooseSource', () => {
        beforeEach(() => {
            spyOn(esacAddDialogComponent, 'updateProgress');
        });

        it('set sourceType, inrement step', () => {
            const source = 2;

            expect(esacAddDialogComponent.sourceType).toBeUndefined();
            expect(esacAddDialogComponent.step).toEqual(0);

            esacAddDialogComponent.chooseSource(source);

            expect(esacAddDialogComponent.sourceType).toEqual(2);
            expect(esacAddDialogComponent.step).toEqual(1);
        });

        it('call updateProgress method', () => {
            const source = 2;

            esacAddDialogComponent.chooseSource(source);

            expect(esacAddDialogComponent.updateProgress).toHaveBeenCalled();
        });
    });

    describe('prevStep', () => {
        beforeEach(() => {
            spyOn(esacAddDialogComponent, 'updateProgress');
        });

        it('decrement step', () => {
            esacAddDialogComponent.step = 2;

            esacAddDialogComponent.prevStep();

            expect(esacAddDialogComponent.step).toEqual(1);
        });

        it('not decrement step if step is equal to 0', () => {
            esacAddDialogComponent.step = 0;

            esacAddDialogComponent.prevStep();

            expect(esacAddDialogComponent.step).toEqual(0);
        });

        it('call updateProgress method', () => {
            esacAddDialogComponent.prevStep();

            expect(esacAddDialogComponent.updateProgress).toHaveBeenCalled();
        });
    });

    describe('updateProgress', () => {
        it('set progress based on step and last step', () => {
            esacAddDialogComponent.step = 1;

            esacAddDialogComponent.updateProgress();

            expect(esacAddDialogComponent.progress).toEqual(50);
        });
    });
});
