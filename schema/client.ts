/**
 * Typed client — provides route resolution for all wedding content types.
 *
 * Run `npx decoupled-cli schema sync` after connecting to a Drupal space
 * to regenerate schema/types.ts and schema/schema.graphql.
 */

import type { DecoupledClient } from 'decoupled-client'
import type { DrupalNode } from 'decoupled-client'
import type { QueryOptions } from 'decoupled-client'

// Placeholder types — sync-schema will replace with actual content types
export type ContentNode = DrupalNode
export type ContentTypeName = string

export interface ContentTypeMap {
  [key: string]: DrupalNode
}

export interface TypedClient {
  getEntries<K extends ContentTypeName>(type: K, options?: QueryOptions): Promise<DrupalNode[]>
  getEntry<K extends ContentTypeName>(type: K, id: string): Promise<DrupalNode | null>
  getEntryByPath(path: string): Promise<ContentNode | null>
  raw<T = any>(query: string, variables?: Record<string, any>): Promise<T>
}

const ROUTE_QUERY = `
  query ($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            __typename id title path body { processed }
          }
          ... on NodeHomepage {
            __typename id title path
            heroTitle heroSubtitle
            heroDescription { processed }
            heroImage { url alt width height }
            statsItems { ... on ParagraphStatItem { id number label } }
            featuredItemsTitle
            ctaTitle ctaDescription { processed }
            ctaPrimary ctaSecondary
          }
          ... on NodeEvent {
            __typename id title path
            body { processed summary }
            eventImage { url alt width height }
            eventDate { timestamp }
            eventTime venueName venueAddress dressCode eventOrder
          }
          ... on NodeStoryChapter {
            __typename id title path
            body { processed summary }
            chapterImage { url alt width height }
            chapterDate chapterLocation chapterOrder
          }
          ... on NodeRsvpInfo {
            __typename id title path
            body { processed summary }
            infoImage { url alt width height }
            infoCategory contactInfo deadline infoOrder
          }
        }
      }
    }
  }
`

// Factory — uses the full route query
export function createTypedClient(client: DecoupledClient): TypedClient {
  return {
    async getEntries() { return [] },
    async getEntry() { return null },
    async getEntryByPath(path) {
      return client.queryByPath(path, ROUTE_QUERY)
    },
    async raw(query, variables) { return client.query(query, variables) },
  }
}
