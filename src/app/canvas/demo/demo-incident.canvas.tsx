'use client'

import {
  Callout,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Grid,
  H1,
  H2,
  H3,
  Pill,
  Row,
  Stack,
  Stat,
  Table,
  Text,
} from 'cursor/canvas'

export default function DemoIncidentReview() {
  return (
    <Stack gap={24} style={{ padding: 24 }}>
      <Stack gap={8}>
        <Row gap={8} align="center" wrap>
          <H1>INC-1842 — checkout p95 spike</H1>
          <Pill tone="warning" active>
            Synthetic demo
          </Pill>
          <Pill tone="info" active>
            Resolved
          </Pill>
        </Row>
        <Text tone="secondary">
          Fake incident review so you can try the viewer. Not a customer canvas.
          Window: 2026-09-11 14:10–15:40 UTC · us-east-1
        </Text>
      </Stack>

      <Grid columns={4} gap={12}>
        <Stat value="4.8s" label="Peak checkout p95 (was 410ms)" tone="danger" />
        <Stat value="18m" label="Time to mitigate" tone="warning" />
        <Stat value="0" label="Failed payments after rollback" tone="success" />
        <Stat value="12%" label="Traffic on canary at detect" />
      </Grid>

      <Callout tone="info" title="What this page is">
        A public demo of a Cursor-style .canvas.tsx rendered in the browser. Drop
        your own file at /canvas and share a short link with your team.
      </Callout>

      <Grid columns="1.1fr 1fr" gap={16}>
        <Card>
          <CardHeader>Timeline</CardHeader>
          <CardBody>
            <Stack gap={10}>
              <Stack gap={2}>
                <H3>14:12 — detect</H3>
                <Text tone="secondary" size="small">
                  Alert: checkout p95 &gt; 2s for 3 consecutive minutes. Error
                  rate flat at 0.3%.
                </Text>
              </Stack>
              <Stack gap={2}>
                <H3>14:21 — isolate</H3>
                <Text tone="secondary" size="small">
                  Only canary pods (image checkout@sha-9f2). Baseline cohort
                  unchanged.
                </Text>
              </Stack>
              <Stack gap={2}>
                <H3>14:30 — mitigate</H3>
                <Text tone="secondary" size="small">
                  Rolled canary back to sha-81c. p95 returned to 390–430ms by
                  14:36.
                </Text>
              </Stack>
            </Stack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>Cause</CardHeader>
          <CardBody>
            <Stack gap={10}>
              <Text size="small">
                <Text weight="semibold">Bug:</Text> new tax-quote client did a
                serial HTTP hop per line item. Carts with 8+ SKUs stacked 8
                round-trips on the request thread.
              </Text>
              <Text size="small">
                <Text weight="semibold">Why tests missed it:</Text> fixture carts
                had 2 items. Load test used the same fixture.
              </Text>
              <Divider />
              <Text tone="tertiary" size="small">
                Fix in flight: batch quote API + 2-item and 20-item fixtures in
                CI.
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Grid>

      <Stack gap={12}>
        <H2>Impact by surface</H2>
        <Table
          headers={['Surface', 'Symptom', 'Customer-visible?', 'Action']}
          rows={[
            ['Checkout', 'Slow submit', 'Yes', 'Rollback'],
            ['Cart', 'None', 'No', 'Watch'],
            ['Admin refunds', 'None', 'No', 'None'],
            ['Tax provider', 'Higher QPS', 'No', 'Already cached'],
          ]}
          rowTone={['danger', 'neutral', 'success', 'info']}
        />
      </Stack>

      <Text tone="tertiary" size="small">
        Source: demo-incident.canvas.tsx · share this page as
        brianmunene.me/canvas/demo
      </Text>
    </Stack>
  )
}
