/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.2
 * Contact: info@fax.plus
 */
/**
 *
 * @export
 * @interface NumberNotificationsInner
 */
export interface NumberNotificationsInner {
    /**
     *
     * @type {boolean}
     * @memberof NumberNotificationsInner
     */
    'email'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof NumberNotificationsInner
     */
    'push_notification'?: boolean;
    /**
     *
     * @type {string}
     * @memberof NumberNotificationsInner
     */
    'type'?: string;
}
