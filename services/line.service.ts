import { getLineInfo } from '@libs/line/info.client'

import { ILineInfo } from '@shared/interfaces/line.interface'

const LineService = {
    async getInfo(): Promise<ILineInfo> {
        try {
            const response = await getLineInfo()
            const output: ILineInfo = {
                userId: response.userId,
                basicId: response.basicId,
                displayName: response.displayName,
                profileImageUrl: response.pictureUrl,
            }
            return output
        } catch (error) {
            console.error('Error getting line info:', error)
        }
    },
}

export default LineService
