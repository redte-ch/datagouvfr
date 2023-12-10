import type { Crontab } from './crontab'
import type { Interval } from './interval'
import type { Kwargs } from './kwargs'

/**
 * @export
 * @interface Job
 */
export interface Job {
  /**
   * The job execution arguments
   * @type {Array<Kwargs>}
   * @memberof Job
   */
  args?: Kwargs[]
  /**
   *
   * @type {Crontab}
   * @memberof Job
   */
  crontab?: Crontab
  /**
   * The job description
   * @type {string}
   * @memberof Job
   */
  description?: string
  /**
   * Is this job enabled
   * @type {boolean}
   * @memberof Job
   */
  enabled?: boolean
  /**
   * The job unique identifier
   * @type {string}
   * @memberof Job
   */
  id?: string
  /**
   *
   * @type {Interval}
   * @memberof Job
   */
  interval?: Interval
  /**
   * The job execution keyword arguments
   * @type {Kwargs}
   * @memberof Job
   */
  kwargs?: Kwargs
  /**
   * The last job execution date
   * @type {string}
   * @memberof Job
   */
  last_run_at?: string
  /**
   * The last execution task id
   * @type {string}
   * @memberof Job
   */
  last_run_id?: string
  /**
   * The job unique name
   * @type {string}
   * @memberof Job
   */
  name: string
  /**
   * The schedule display
   * @type {string}
   * @memberof Job
   */
  schedule?: string
  /**
   * The task name
   * @type {string}
   * @memberof Job
   */
  task: JobTaskEnum
}

export enum JobTaskEnum {
  TestHighQueue = 'test-high-queue',
  TestDefaultQueue = 'test-default-queue',
  PurgeDatasets = 'purge-datasets',
  SendFrequencyReminder = 'send-frequency-reminder',
  ApigouvfrLoadApis = 'apigouvfr-load-apis',
  TestLog = 'test-log',
  UpdateDatasetsReusesMetrics = 'update-datasets-reuses-metrics',
  PurgeChunks = 'purge-chunks',
  ComputeSiteMetrics = 'compute-site-metrics',
  TestLowQueue = 'test-low-queue',
  PurgeOrganizations = 'purge-organizations',
  Harvest = 'harvest',
  RecommendationsClean = 'recommendations-clean',
  PiwikBulkTrackApi = 'piwik-bulk-track-api',
  ExportCsv = 'export-csv',
  PurgeHarvesters = 'purge-harvesters',
  CountTags = 'count-tags',
  RecommendationsAdd = 'recommendations-add',
  MapTransportDatasets = 'map-transport-datasets',
  TestError = 'test-error',
  PurgeReuses = 'purge-reuses',
  PurgeHarvestJobs = 'purge-harvest-jobs',
  UpdateMetrics = 'update-metrics'
}
