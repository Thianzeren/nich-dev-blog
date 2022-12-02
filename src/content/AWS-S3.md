---
slug: "/aws-s3-md"
date: "2022-12-01"
title: "aws-s3-md"
---
# S3 - Simple Storage Service

Service that provides object level storage, objects can be files or chunks of data. This is different from File Storage and Block Storage.

## S3 Concepts
- Buckets - stores objects
- Region - buckets are placed here
- Objects - could have a file, not necessary to be a file
- Keys - logical name of the project
- Object URLs - to locate the objects
- Eventual Consistency
    - A bucket goes to 3 availability zones, if one of the buckets get modified, at that moment there is inconsistency but eventually there will be consistency
    - EBS has consistency, S3 has EVENTUAL consistency

## S3 Operations
- Creating and Deleting buckets
- Write, Read, Delete, Manage (properties - URL, metadata)
- Listing keys in buckets

## S3 Access Control
1. Bucket Policies
    - Resource based policy, tied to each buckets to grant access permnissions to the bucket and the objects
2. Access Control List (Old)
    - Each bucket and object has an ACL attached to it as a subresource. It defines which AWS accounts or groups are granted access and the type of access


## S3 Encryption
-   File transit encryption (during upload/download)
	- Encrypted by SSL/TLS
- Server Side Encryption (SSE)
	- Encrypting the object data (what is being stored)
	- SSE-AES - S3 handles the key, uses AES-256 algorithm
	- SSE-KMS - Envelope encryption, AWS KMS and user manages the key
    - SSE-C - User (Customer) provides and manages the key

## S3 Use Cases
- Storing and distributing static web content and media
- Host entire static websites -> default page is not automatically set up
- Data store for computation and large-scale analytics
- Back up Tool

## S3 Storage Classes
They tend to be differentiated by frequency of access, most frequent -> least frequent -> archival. There is also S3 Intelligent-Tiering is an Amazon S3 storage class designed to optimize storage costs by automatically moving data to the most cost-effective access tier, without performance impact or operational overhead.

|Storage class|Designed for|Durability (designed for)|Availability (designed for)|Availability Zones|Min storage duration|Min billable object size|Other considerations|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|S3 Standard|Frequently accessed data (more than once a month) with millisecond access|99.999999999%|99.99%|>= 3|None|None|None|
|S3 Standard-IA|Long-lived, infrequently accessed data (once a month) with millisecond access|99.999999999%|99.9%|>= 3|30 days|128 KB|Per GB retrieval fees apply.|
|S3 Intelligent-Tiering|Data with unknown, changing, or unpredictable access patterns|99.999999999%|99.9%|>= 3|None|None|Monitoring and automation fees per object apply. No retrieval fees.|
|S3 One Zone-IA|Recreatable, infrequently accessed data (once a month) with millisecond access|99.999999999%|99.5%|1|30 days|128 KB|Per GB retrieval fees apply. Not resilient to the loss of the Availability Zone.|
|S3 Glacier Instant Retrieval|Long-lived, archive data accessed once a quarter with millisecond access|99.999999999%|99.9%|>= 3|90 days|128 KB|Per GB retrieval fees apply.|
|S3 Glacier Flexible Retrieval|Long-lived archive data accessed once a year with retrieval times of minutes to hours|99.999999999%|99.99% (after you restore objects)|>= 3|90 days|40 KB|Per GB retrieval fees apply. You must first restore archived objects before you can access them. For information, see Restoring an archived object.|
|S3 Glacier Deep Archive|Long-lived archive data accessed less than once a year with retrieval times of hours|99.999999999%|99.99% (after you restore objects)|>= 3|180 days|40 KB|Per GB retrieval fees apply. You must first restore archived objects before you can access them. For information, see Restoring an archived object.|
|RRS (not recommended)|Noncritical, frequently accessed data with millisecond access|99.99%|99.99%|>= 3| | | |


## S3 Lifecycle Configuration
As objects "age", some of them may be used less or no longer used at all, we may still want to keep them but we not longer need to access them as frequently as before.

We want to manage your objects so that they are stored cost effectively throughout their lifecycle, since accessibility of object depends on the type of S3 it is stored in and hence affects the costs.

Different actions may be acted on the objects as they age:

- **Transition Actions**: These actions define when objects transition to another storage class. For example, you might choose to transition objects to the S3 Standard-IA storage class 30 days after creating them, or archive objects to the S3 Glacier Flexible Retrieval storage class one year after creating them

- **Expiration Actions**: These actions define when objects expire. Amazon S3 deletes expired objects on your behalf.
