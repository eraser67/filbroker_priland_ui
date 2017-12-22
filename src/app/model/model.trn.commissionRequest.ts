export class TrnCommissionRequest {
	id: number;
	commissionRequestNumber: string;
	commissionRequestDate: string;
	brokerId: number;
	soldUnitId: number;
	commissionNumber: string;
	amount: number;
	remarks: string;
	preparedBy: number;
	checkedBy: number;
	approvedBy: number;
	status: string;
	isLocked: boolean;
	createdBy: number;
	createdDateTime: string;
	updatedBy: number;
	updatedDateTime: string;
}