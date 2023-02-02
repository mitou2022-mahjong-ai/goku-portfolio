/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Stats } from '../models/Stats';
import type { Status } from '../models/Status';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DefaultService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Overall Gamestats
     * @returns Stats Successful Response
     * @throws ApiError
     */
    public getOverallGamestatsGameStatsOverallGet(): CancelablePromise<Array<Stats>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/game_stats/overall',
        });
    }

    /**
     * Health Check
     * @returns string Successful Response
     * @throws ApiError
     */
    public healthCheckGet(): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/',
        });
    }

    /**
     * Get Status
     * @returns Status Successful Response
     * @throws ApiError
     */
    public getStatusRankRateGet(): CancelablePromise<Status> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/rank_rate',
        });
    }

}
